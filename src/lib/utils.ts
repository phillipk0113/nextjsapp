import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { sha256 } from 'js-sha256'


export function sha_hasher(text:string) {
    return sha256(text);
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
