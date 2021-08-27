import { createClient } from '@supabase/supabase-js';
import { RequireToHome } from '../hook/authUser';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


export const getEditor = async (dataInput) => {
    const { data, error } = await supabase
    .from('editors')
    .select('*')
    .eq('id', dataInput);
  
    if (error) {
      console.log(error.message);
      throw error;
    }
  
    return data || [];
};

export const getArticle = async (dataInput) => {
    const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', dataInput);
  
    if (error) {
      console.log(error.message);
      throw error;
    }
  
    return data || {};
};

export const getAllArticles = async() => {
    const { data, error } = await supabase
    .from('articles')
    .select('*')
    .limit(15);
  
    if (error) {
      console.log(error.message);
      throw error;
    }

    return data || [];
}

export const setNewArticle =async(newArticle)=>{
    await supabase
    .from('articles')
    .insert([
        { 
            title: newArticle.title, 
            photo_link: newArticle.link,
            description: newArticle.description,
            article: newArticle.article,
            id_creator:newArticle.user_creator
        }
    ])
}