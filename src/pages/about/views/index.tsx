import ArticleLayout from "@/layouts/article";
const content = {
    title: 'About us',
    text: `Following the establishment of the People's Republic in 1949, Communists quickly took control of art in China. The socialist realismthat was characteristic of Soviet art came to be highly influential in the People's Republic. The new government proposed a series of paintings, preferably in oil, to memorialize the history of the Party, and its triumph in 1949. To this end, in December 1950, arts official Wang Yeqiu proposed to Deputy Minister of Culture Zhou Yang that there be an art exhibition the following year to commemorate the 30th anniversary of the founding of the Party in China. Wang had toured the Soviet Union and observed its art, with which he was greatly impressed, and he proposed that sculptures and paintings be exhibited depicting the Party's history, for eventual inclusion in the planned Museum of the Chinese Revolution. Even before gaining full control of the country, the Party had used art as propaganda, a technique especially effective as much of the Chinese population was then illiterate. Wang's proposal was preliminarily approved in March 1951, and a committee, including the art critic and official Jiang Feng, was appointed to seek suitable artists.[1] Although nearly 100 paintings were produced for the 1951 exhibition, not enough were found to be suitable, and it was cancelled. `
  }
const About: React.FC = () =>{
    return(
        <ArticleLayout content={content}/>
    )
}
export default About;