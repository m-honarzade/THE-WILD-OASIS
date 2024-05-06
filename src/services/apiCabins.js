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
// ***************************************

export const createCabin = async (newCabib) => {
  const { data, error } = await supabase
    .from("cabin")
    .insert([newCabib])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not created.");
  }

  return data;
};

// ***************************************
export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not delete.");
  }

  // return data;
};
