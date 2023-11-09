function Home() {
    const articles = [
      {
        title: "Article 1",
        price: 10,
        isPublished: true,
      },
  
      {
        title: "Article 2",
        price: 20,
        isPublished: false,
      },
  
      {
        title: "Article 3",
        price: 30,
        isPublished: true,
      },
  
      {
        title: "Article 4",
        price: 40,
        isPublished: false,
      },
  
      {
        title: "Article 5",
        price: 50,
        isPublished: true,
      },
  
      {
        title: "Article 6",
        price: 60,
        isPublished: false,
      },
  
      {
        title: "Article 7",
        price: 70,
        isPublished: true,
      },
  
      {
        title: "Article 8",
        price: 80,
        isPublished: false,
      },
  
      {
        title: "Article 9",
        price: 90,
        isPublished: true,
      },
  
      {
        title: "Article 10",
        price: 100,
        isPublished: false,
      },
    ];
  
    // 1. On accède au tableau articles via la fonction filter et le paramètre "article"

    // 2. On récupère les éléments du tableau si la valeur isPublished est "true"

    const publishedArticles = articles.filter((article) => {
      return article.isPublished === true;
    });
  
    // 3. On récupère uniquement les 3 derniers articles via la fonction slice -3 pour n'afficher que ceux qui remplissent la condition isPublished === true

    const lastThreePublishedArticles = publishedArticles.slice(-3);
  
    // 4. On retourne lastThreePublishedArticles via une boucle en utilisant .map et un paramètre (article) pour accéder aux sous-propriétés de chaque objet du tableau

    return (
        <>
    <h2>Les trois derniers articles : </h2>
      <main>
        {lastThreePublishedArticles.map((article) => {
          return (
            <article>
              <h2>{article.title}</h2>
              <h3>{article.price}e</h3>
            </article>
          );
        })}
      </main>
      </>
    );
  }
  
  export default Home;