import { Inter, Lusitana } from 'next/font/google'

// 主字体，用于body元素
export const inter = Inter({
    subsets: ['latin']
})

// 辅助字体，用于指定元素
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
})