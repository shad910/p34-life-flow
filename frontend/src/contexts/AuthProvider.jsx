import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.init';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from 'firebase/auth';
import { useQueryClient } from "@tanstack/react-query";



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleAuthProvider = new GoogleAuthProvider();
    const queryClient = useQueryClient();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    const logOut = async () => {
        try {
            setLoading(true);

            await signOut(auth);

            queryClient.clear();

        } catch (error) {
            console.error("Error during logout:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = (profile) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, profile)
                .then(() => {
                    // Update local state after profile update
                    setUser({ ...auth.currentUser });
                })
                .catch((error) => console.error(error));
        }
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const updateUserPassword = async (currentPassword, newPassword) => {
        setLoading(true);
        const currentUser = auth.currentUser;

        if (!currentUser) {
            setLoading(false);
            throw new Error("No user is currently signed in.");
        }

        try {
            const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
            await reauthenticateWithCredential(currentUser, credential);
            await updatePassword(currentUser, newPassword);

            setLoading(false);
            return true;
        } catch (error) {
            setLoading(false);
            console.error("Error updating password:", error.message);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const AuthInformation = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        resetPassword,
        updateUserPassword,
    };

    return (
        <AuthContext value={AuthInformation}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
