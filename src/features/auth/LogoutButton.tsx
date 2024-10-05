'use client'

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signOut(),
  });

  return (
    <Button
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      variant={"destructive"}
    >
      {mutation.isPending ? (
        <Loader size={12} className="ml-0.5 mr-2" />
      ) : (
        <LogOut size={12} className="ml-0.5 mr-2" />
      )}
      Log out
    </Button>
  );
};
