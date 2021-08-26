import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


export const getEditor = async (key, dataInput) => {
    const { data, error } = await supabase
    .from('Editors')
    .select('*')
    .eq(key, dataInput);
  
    if (error) {
      console.log(error.message);
      throw error;
    }
  
    return data || [];
};

export const getAllArticles = async() => {
    const { data, error } = await supabase
    .from('articles')
    .select('*')
    .limit(30);
  
    if (error) {
      console.log(error.message);
      throw error;
    }
  
    return data || [];
}

export const getAllArticlesOfEditor = async(_id) => {
    const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id_creator',  _id);
  
    if (error) {
      console.log(error.message);
      throw error;
    }
  
    return data || [];
}