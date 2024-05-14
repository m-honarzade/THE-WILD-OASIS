import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

const useSettings = () => {
  const {
    isLoading,
    data: settingData,
    error,
  } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });
  return { isLoading, settingData };
};

export default useSettings;
