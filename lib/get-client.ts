import { promises as fs } from "fs"

import { Client } from "@/lib/types"

export const getClients = async () => {
  return JSON.parse(await fs.readFile("data/clients.json", "utf8")) as Client[]
}

export const getClient = async (slug: string) => {
  const clients = await getClients()

  const client = clients.find(client => client.slug === slug) as Client

  return {
    client,
  }
}
