import supabase from "./supabase";

const getCabins = async () => {
  const { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not loaded.");
  }

  return data;
};
export default getCabins;
