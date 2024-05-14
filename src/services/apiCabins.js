import supabase, { supabaseUrl } from "./supabase";

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

export const createEditCabin = async (newCabin, id) => {
  console.log(newCabin);
  console.log(newCabin.image.name, id);
  console.log(supabaseUrl);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(hasImagePath);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : ` ${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://etvtfypxznytxhzmrkny.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg   ***imageFormat
  // 1. create cabin
  console.log(newCabin.image);
  let query = supabase.from("cabin");
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // Edit Cabin
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  // both create and edit
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not created.");
  }

  // 2. upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  console.log(newCabin.image);

  // 3.delete the cabin if there was an error in uploading file image.

  if (storageError) {
    await supabase.from("cabin").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabins image could not uploaded and the cabin was not created."
    );
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
