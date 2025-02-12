import { useParams } from "react-router";

export const useTenantId = () => {
  const params = useParams();
  return params.tenantId;
};