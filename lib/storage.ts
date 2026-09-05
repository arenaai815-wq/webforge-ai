// Vault Storage - local custom repository manager
import { ForgeMeta } from "./forge"

const VAULT_KEY = "webforge-vault"

export function getVault(): ForgeMeta[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(VAULT_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveToVault(meta: ForgeMeta) {
  const vault = getVault()
  const exists = vault.findIndex((v) => v.slug === meta.slug)
  if (exists >= 0) {
    vault[exists] = meta
  } else {
    vault.unshift(meta)
  }
  localStorage.setItem(VAULT_KEY, JSON.stringify(vault))
  return vault
}

export function getFromVault(slug: string): ForgeMeta | null {
  return getVault().find((v) => v.slug === slug) || null
}

export function deleteFromVault(slug: string) {
  const vault = getVault().filter((v) => v.slug !== slug)
  localStorage.setItem(VAULT_KEY, JSON.stringify(vault))
  return vault
}
