import { Rowing } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const usePath = () => {
  const router = useRouter();
  console.log(router);
  console.log(nowId);
  useEffect(() => {
    const nowId = router.pathname == value.link ? "active" : "";
    return () => {
      nowId = "";
    };
  }, [router.pathname]);
};
