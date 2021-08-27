import { getEditor, getArticle } from "../utils/supabase-consult";
import Container from "./container/container";

export default function Article(props) {
    return (
        <Container>
            <div className="">
                <div className='flex max-w-xl my-10 bg-white shadow-2xl rounded-lg overflow-hidden mx-auto'>
                    <div className='flex items-center w-full'>
                        <div className='w-full'>
                            <div className="flex flex-row mt-2 px-2 py-3 mx-3">
                                <div className="flex flex-col mb-2 ml-4 mt-1">
                                    <a href="/">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 3.0929L2 8.09288L2 8.79999L6.99999 13.8L7.7071 13.0929L3.56066 8.94644L14 8.94644L14 7.94644L3.56066 7.94644L7.7071 3.8L6.99999 3.0929Z" fill="#C5C5C5" />
                                        </svg>
                                    </a>
                                    <div className='text-gray-600 text-sm font-semibold'>Autor: {props.editor.email}</div>
                                    <div className='flex w-full mt-1'>
                                        <div className='text-gray-400 font-thin text-xs'>
                                            UTC {props.article.creation_date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-100"></div>
                            <div className='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'><img class="rounded" src={props.article.photo_link} /></div>
                            <div className='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>{props.article.title}</div>
                            <div className='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>{props.article.article}</div></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export async function getServerSideProps({ query }) {
    const articles = await getArticle(query.ar);
    let article
    articles.map(obj => {
        article = obj;
    })
    const editors = await getEditor(article.id_creator);
    let editor
    editors.map(obj => {
        editor = obj;
    })
    return {
        props: {
            article,
            editor
        }
    }
}