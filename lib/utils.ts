import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//convert prisma object to regular object；泛型函数 convertToPlainObject，其作用是将一个传入的值 value 转换为一个 普通的 JavaScript 对象，也就是说，转换后的对象会丢掉所有原型链上的方法、getter/setter 等，只保留基本的属性值。
//<T> 代表了一个泛型参数，允许该函数接收任何类型的参数 value，无论是基本类型（如 string、number）还是复杂的对象类型（如数组、对象、类实例等）。
export function  convertToPlainObject<T>(value:T){
  return JSON.parse(JSON.stringify(value))
}

//Format number with decimal places格式化价格
export function formatNumberWithDecimal(num: number): string {
  const [int,decimal]=num.toString().split(".");
  return decimal ?`${int}.${decimal.padEnd(2,"0")}`: `${int}.00`

}