"use client"
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import ImageUpload from "@/components/shared/file";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {queryCategory} from "@/feature/article/services/articleapi";
import {catgorytype} from "@/feature/article/types";
import {toast} from "sonner";

// 使用 dynamic 导入并设置 { ssr: false }
// const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
//     ssr: false, // 禁用服务端渲染
// });

// 动态加载 Markdown 编辑器，防止 SSR 报错
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {ssr: false});


// const optionSchema = z.object({
//     label: z.string(),
//     value: z.string(),
//     disable: z.boolean().optional(),
// });

// const formSchema = z.object({
//     articleTitle: z.string().min(1, {
//         message: "文章标题不能为空！",
//     }),
//     categoryId: z.string().min(1, {
//         message: "请选择分类！",
//     }),
//     tagIdList: z.array(optionSchema).min(1, {
//         message: "请选择标签！",
//     }),
//     articleContent: z.string().optional(),
//     articleCover: z.string().optional(),
// });


export default function ArticleEditorPage() {

    type ArticleFormValues = {
        title: string;
        content: string;
        categoryId: string;
        tagIds: number[];
        cover: string | null;
        isDraft: boolean;
    };
    const [submitting, setSubmitting] = useState(false);
    const [reseting, setreseting] = useState(false);
    // const [saving, setsaving] = useState(false);
    const [categoryList, setCategoryList] = useState<catgorytype[]>();
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);


    const handleUploadComplete = (url: string) => {
        setImageURL(url);
    };

    const form = useForm<ArticleFormValues>({
        defaultValues:
            {
                title: "",
                content: "",
                categoryId: "",
                tagIds: [
                    71
                ],
                cover: null,
                isDraft: true
            }

    });


    useEffect(() => {
        const getCategory = async () => {
            try {
                const categories = await queryCategory();
                setCategoryList(categories)
            } catch (error) {
                console.log(error)
                toast.error("分类加载失败！")
            } finally {
                setLoading(false)
            }
        }
        getCategory()
    }, []);
    const onSubmit = async (data: ArticleFormValues) => {
        setSubmitting(true);
        console.log("提交文章:", data);

        // 模拟 API 请求
        await new Promise((res) => setTimeout(res, 1500));

        alert("文章提交成功！");
        setSubmitting(false);
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
                            size="lg">
                        {submitting ? "提交中..." : "提交文章"}
                    </Button>
                    <Button type="reset" disabled={reseting}>
                        {submitting ? "清空中..." : "已清空"}
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


                            <div className="flex-col gap-[1.5rem] mt-[1rem] ">
                                <h3>文章设置</h3>

                                <FormField
                                    control={form.control}
                                    name="cover"
                                    render={() => (
                                        <FormItem className="">
                                            <FormLabel>封面图片</FormLabel>
                                            <FormControl>
                                                <input type="file" className="file-input file-input-primary"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField

                                    control={form.control}
                                    name="categoryId"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>文章分类</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="{styles.select}">
                                                        <SelectValue placeholder="选择分类"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {categoryList?.map(category => (
                                                        <SelectItem
                                                            key={category.categoryId}
                                                            value={category.categoryName}
                                                        >
                                                            {category.categoryName}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                {/*<FormField*/}
                                {/*    control={form.control}*/}
                                {/*    name="tagIds"*/}
                                {/*    render={({field}) => (*/}
                                {/*        <FormItem>*/}
                                {/*            <FormLabel>文章标签</FormLabel>*/}
                                {/*            <MultipleSelector*/}
                                {/*                {...field}*/}
                                {/*                onSearch={searchTags}*/}
                                {/*                triggerSearchOnFocus*/}
                                {/*                placeholder="选择或搜索标签"*/}
                                {/*                className={styles.tagSelector}*/}
                                {/*                loadingIndicator={*/}
                                {/*                    <p className={styles.selectorMessage}>加载中...</p>*/}
                                {/*                }*/}
                                {/*                emptyIndicator={*/}
                                {/*                    <p className={styles.selectorMessage}>*/}
                                {/*                        未找到相关标签*/}
                                {/*                    </p>*/}
                                {/*                }*/}
                                {/*            />*/}
                                {/*            <FormMessage/>*/}
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
