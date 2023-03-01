type Article = {
    author : string | null,
    category : string,
    country : string,
    description : string,
    image : string | null,
    language : string,
    published_at : string,
    source : string,
    title : string,
    url : string
}

type pagination = {
    count : Int,
    limit : Int16,
    offset : Int,
    total : Int1,
}



type NewsResponse = {
    pagination : pagination,
    data : Article[]
}


type Category =  
| "general"
| "Business"
| "Entertainment"
| "Health"
|"Scicence"
| "Sports"
| "Technologies"