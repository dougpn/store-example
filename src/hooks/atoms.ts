import { Product } from '@/app/products/page'
import { atom } from 'jotai'

export const cartAtom = atom<Product[]>([])