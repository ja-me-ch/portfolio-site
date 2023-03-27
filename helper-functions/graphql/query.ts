const Query = function (props) {
    let query = `query ($name: String!) {
  repository(owner: "ja-me-ch", name: $name) {
    name
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 5) {
            edges {
              node {
                id
                message
                abbreviatedOid
                pushedDate
                url
                repository {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}`;
    return {
        query,
        variables: {
            name: props,
        },
    };
};

export default Query;
