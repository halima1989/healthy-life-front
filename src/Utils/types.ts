import { Dispatch, SetStateAction } from 'react'

export type RegisterProps = {
    email: string
    firstName: string
    lastName: string
    password: string
    gdpr: boolean
}

export type LoginProps = {
    email: string
    password: string
}

export type CartProps = {
    cartItems: CartItemProps[]
    totalCart: number
    totalQuantity: number
}

export type CategoryProps = {
    id: string
    name: string
}

export type CreateOrUpdateCategoryProps = {
    name: string
}

export type CartItemProps = {
    id: string
    cartId: string
    price: number
    quantity: number
    product: ProductProps
}

export type CreateProductProps = {
    categoryId: string
    description: string
    image: string
    file?: File[]
    name: string
    price: number
}

export type UpdateProductProps = {
    id: string
    categoryId: string
    name: string
    price: number
    description: string
    newImageFile?: File[] // Fichier d'image à télécharger (optionnel)
    image?: string // URL de l'image existante (optionnel)
}

export type UserProps = {
    id: string
    email: string
    firstName: string
    lastName: string
    orders: []
    isActive: boolean
}

export type actionProps = {
    type: any
    payload: any
}
export type stateProps = {
    quantity: number
    product: ProductProps | null
}
// ProductProps.ts
export type ProductProps = {
    product: productType
}

export type productType = {
    id: string
    name: string
    description: string
    image: string
    price: number
    category: string
    stock: number
}

export type cartType = {
    product: productType | null
    quantity: number
}
export type ReducerCartType = {
    cart: cartType[]
    setcart: Dispatch<SetStateAction<cartType[]>>
}

export type actionType = {
    type: any
    payload: any
}
export type stateType = {
    quantity: number
    product: productType | null
}
export type ResetPasswordProps = {
    password: string
    confirmPassword: string
}
