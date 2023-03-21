const MakeRequest = function (props) {
    const { query, variables } = props;

    let url = "https://api.github.com/graphql",
        options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        };

    // Make the HTTP Api request
    return fetch(url, options)
        .then((response) => {
            return response.json().then(function (json) {
                return response.ok ? json : { data: { User: null } };
            });
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
};

export default MakeRequest;
