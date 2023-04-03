import { BlogGraphQL } from "../../components/BlogGraphQL/BlogGraphQL";
import { BlogParagraphs } from "../../components/BlogParagraphs/BlogParagraphs";
import { YouAlsoLike } from "../../components/YouAlsoLike/YouAlsoLike";

export const Blog = props =>{
    return(
        <div className='Blog'>
            <BlogGraphQL></BlogGraphQL>
            <BlogParagraphs></BlogParagraphs>
            <YouAlsoLike></YouAlsoLike>
        </div>
    );
}