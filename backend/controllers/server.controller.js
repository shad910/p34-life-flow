import { getServerInfo } from "../models/server.model.js";

export function getServerStatus(req, res) {
  res.status(200).json(getServerInfo());
}

export function endpointNotFound(req, res) {
  res.status(404).json({ message: "Endpoint not found" });
}
