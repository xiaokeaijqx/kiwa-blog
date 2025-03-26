"use client"
import {Controller, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {queryArticle, queryCategory, queryTag} from "@/feature/article/services/articleapi";
import {ArticleFormValues, CategoryType, TagType} from "@/feature/article/types";
import {toast} from "sonner";
import ImageUploader from "@/components/shared/image-upload";

// 使用 dynamic 导入并设置 { ssr: false }
// const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
//     ssr: false, // 禁用服务端渲染
// });

// 动态加载 Markdown 编辑器，防止 SSR 报错
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {ssr: false});


export default function ArticleEditorPage() {


    const form = useForm<ArticleFormValues>({
        defaultValues: {
            title: "",
            content: "",
            categoryId: 1,
            tagIds: [] ,
            cover: {image: null},
            isDraft: true,
        },
    });


    const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
    const [tagList, setTagList] = useState<TagType[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [reseting, setreseting] = useState(false);
    const [categoryloading, setCategoryLoading] = useState(false)
    const [tagloading, setTagLoading] = useState(false)




    const getCategory = async () => {
        try {
            setCategoryLoading(true)
            const categories = await queryCategory();
            setCategoryList(categories)
            console.log("categories", categories)
        } catch (error) {
            console.log(error)
            toast.error("分类加载失败！")
        } finally {
            setCategoryLoading(false)
        }
    }





        const getTag = async () => {
            try {
                const tags = await queryTag();
                setTagList(tags)
                console.log("tags", tags)
            } catch (error) {
                console.log(error)
                toast.error("标签加载失败！")
            } finally {
                setTagLoading(false)
            }
        }

    const onSubmit = async (data: ArticleFormValues) => {
        try {
            setSubmitting(true);
            console.log("提交文章:", data)

            // 发送到API
            await queryArticle(data)
            toast.success("提交成功");
        } catch (error) {
            toast.error("提交失败");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-[100vh] pt-[5rem] mx-auto  bg-[#f8fafc] relative z-0">

            <div
                className="h-[150px] flex justify-between items-center
                fixed  top-0 left-0 right-0 z-40 pt-[60px]
                boder-b-[#e5e7eb]-[1px] bg-[#f8fafc] shadow ">
                <h1 className="font-bold ">编辑文章</h1>
                {/* 提交按钮 */}
                <div className="flex gap-2">
                    <Button type="submit" disabled={submitting} variant="outline"
                            size="lg"
                            onClick={form.handleSubmit(onSubmit)}


                    >
                        {submitting ? "提交中..." : "提交文章"}
                    </Button>

                    <Button type="reset" disabled={reseting} variant="outline"
                            size="lg"
                            onClick={() => {
                                setreseting(true);
                                form.reset()
                                setreseting(false);
                            }}>
                        {reseting ? "清空中" : "清空"}
                    </Button>

                    {/*<Button disabled={saveing} >*/}
                    {/*    {submitting ? "保存..." : "已保存"}*/}
                    {/*</Button>*/}

                </div>
            </div>

            <div className=" max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px]">

                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-8 ">


                        {/* Markdown 编辑器 */}
                        {/* 标题输入 */}
                        <div className={"w-3/4"}>
                            {/*1标题*/}
                            <FormField
                                name="title"
                                control={form.control}
                                rules={{required: "标题不能为空"}}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel
                                            className="text-lg font-medium text-gray-700">文章标题</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-12 text-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                                type="text" placeholder="请输入标题" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500"/>
                                    </FormItem>
                                )}
                            />
                            {/*2 文章内容content    */}
                            <FormField
                                control={form.control}
                                name="content"
                                rules={{required: "文章内容不能为空"}}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>文章内容</FormLabel>
                                        <FormControl>
                                            <MDEditor value={field.value} onChange={field.onChange} height={500}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>


                        <div className="flex-col gap-[1.5rem]  w-1/4">
                            <h3>文章设置</h3>
                            {/*3封面图片*/}
                            <FormField
                                control={form.control}
                                name="cover"
                                rules={{
                                    required: "请选择封面",
                                    validate: (value) => !!value?.image || "请上传封面图片" // 双重验证
                                }}
                                render={({field}) => (
                                    <FormItem className="">
                                        <FormLabel>封面图片</FormLabel>
                                        <FormControl>

                                            <ImageUploader
                                                setImage={(file) => {
                                                    field.onChange({image: file}); // 直接更新表单字段
                                                    // setImage(file); // 同时更新本地状态（如果需要）
                                                }}

                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            {/*文章分类categoryId*/}
                            <Controller
                                classname="w-full "

                                control={form.control}
                                name="categoryId"
                                rules={{required: "请选择分类"}}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>文章分类</FormLabel>
                                        <Select onValueChange={field.onChange}
                                                onOpenChange={(open) => {
                                                    if (open && categoryList.length === 0) {
                                                        getCategory().then(() => {});
                                                    }
                                                }}>
                                                {/*<SelectValue placeholder={categoryloading ? "加载中..." : "选择分类"}/>*/}

                                                {/*{!field.value && ("选择分类")}*/}
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder={categoryloading ? "加载中..." : "选择分类"} />
                                                    </SelectTrigger>
                                                </FormControl>

                                            <SelectContent>
                                                {categoryList?.map((category) => (
                                                    <SelectItem key={category.categoryId}
                                                                value={category.categoryId.toString()}>
                                                        {category.categoryName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/*tagID*/}
                            <Controller
                                classname="w-full"
                                control={form.control}
                                name="tagIds"
                                render={({field}) => (
                                    <FormItem >
                                        <FormLabel>文章标签</FormLabel>
                                        <Select

                                            onValueChange={(value) => {
                                                const valueNum = parseInt(value);
                                                const newValue = field.value || [];
                                                if (newValue.includes(valueNum)) {
                                                    field.onChange(newValue.filter(v => v !== valueNum));
                                                } else {
                                                    field.onChange([...newValue, valueNum]);
                                                }
                                            }}
                                            onOpenChange={(open) => {
                                                if (open && tagList.length === 0) {
                                                    getTag();
                                                }
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={tagloading ? "加载中..." : "选择标签"}>
                                                        {field.value?.length
                                                            ? `已选择 ${field.value.length} 个标签`
                                                            : "选择标签"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                {tagList?.map(tag => (
                                                    <SelectItem
                                                        key={tag.tagId}
                                                        value={tag.tagId.toString()}
                                                        onClick={(e) => {
                                                            // 阻止选择后自动关闭
                                                            e.preventDefault();
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                checked={field.value?.includes(tag.tagId)}
                                                                readOnly
                                                            />
                                                            {tag.tagName}
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                {/* 显示已选择的标签 */}
                <div className="flex flex-wrap gap-2 mt-2">
                            {field.value?.map(tagId => {
                                const tag = tagList.find(t => t.tagId === tagId);
                                return tag && (
                                    <div
                                        key={tag.tagId}
                                        className="bg-gray-100 px-2 py-1 rounded-md text-sm flex items-center gap-1"
                                    >
                                        {tag.tagName}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                field.onChange(field.value.filter(id => id !== tagId));
                                            }}
                                            className="text-gray-500 hover:text-gray-700"
                                        >

                                        </button>
                                    </div>
                                );
                            })}
                        </div>



                                    </FormItem>

                                )}
                            />
                            {/* 文章标签（多选） */}
                            {/*<Controller*/}
                            {/*    control={form.control}*/}
                            {/*    name="tagIds"*/}
                            {/*    render={({ field }) => (*/}
                            {/*        <FormItem>*/}
                            {/*            <FormLabel>文章标签</FormLabel>*/}
                            {/*            <div className="grid grid-cols-3 gap-2">*/}
                            {/*                {tagList.map((tag) => (*/}
                            {/*                    <label key={tag.tagId} className="flex items-center space-x-2">*/}
                            {/*                        <input*/}
                            {/*                            type="checkbox"*/}
                            {/*                            value={tag.tagId}*/}
                            {/*                            checked={field.value.includes(tag.tagId)}*/}
                            {/*                            onChange={(e) => {*/}
                            {/*                                const newTagIds = e.target.checked*/}
                            {/*                                    ? [...field.value, tag.tagId]*/}
                            {/*                                    : field.value.filter((id) => id !== tag.tagId);*/}
                            {/*                                field.onChange(newTagIds);*/}
                            {/*                            }}*/}
                            {/*                        />*/}
                            {/*                        <span>{tag.tagName}</span>*/}
                            {/*                    </label>*/}
                            {/*                ))}*/}
                            {/*            </div>*/}
                            {/*            <FormMessage />*/}
                            {/*        </FormItem>*/}
                            {/*    )}*/}
                            {/*/>*/}




                        </div>


                    </form>
                </Form>
            </div>
        </div>
    );
}
