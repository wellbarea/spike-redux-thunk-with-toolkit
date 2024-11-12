import { useFetchData } from "../hooks/use-fetch-data";
import { List } from "@/components/list";

export const PostScreen = () => {
    
    const { data, error, loading } = useFetchData();

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error}</p>;

    return <List data={data} />;
}