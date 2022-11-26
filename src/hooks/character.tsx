import { gql, useQuery } from '@apollo/client';
const myQuery = gql`
                    query GetCharacter($id: ID!) {
                        character(id: $id) {
                            name
                            image
                            id
                            episode {
                                name
                                episode
                            }
                        }
                    }`

export const useCharacter = (id: number | string | undefined) => {
    if (!id) {
        return { loading: false, error: null, data: { character: null } };
    }

    const { loading, error, data } = useQuery(myQuery, {
        variables: { id }
    });
    return { loading, error, data };
}
