import { BlogsInfo } from "../../components/BlogsInfo/BlogsInfo";
import { BlogsList } from "../../components/BlogsList/BlogsList";
import { BlogsMain } from "../../components/BlogsMain/BlogsMain";
import { ShareBlog } from "../../components/ShareBlog/ShareBlog";

export const Blogs = props =>{
    return(
        <div className='Blogs'>
            <BlogsMain></BlogsMain>
            <BlogsList></BlogsList>
            <BlogsInfo></BlogsInfo>
            <ShareBlog></ShareBlog>
        </div>
    );
}