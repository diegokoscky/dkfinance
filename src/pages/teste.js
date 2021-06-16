export default function Teste({ org }) {
    return (
        <div>
            <h1>{org.login}</h1>
            <h3>{org.description}</h3>

            <p>
                Site: <a href={org.blog}>{org.blog}</a>
            </p>
        </div>
    );
}

export const getStaticProps = async () => {
    // Envia a requisição para o endpoint da API
    const response = await fetch("https://api.github.com/orgs/rocketseat", {
        //method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    return {
        props: {
            org: data,
        },
    };
};

// getStaticProps/getServerSideProps só funciona em PAGE LEVEL
