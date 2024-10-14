'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export type CoursePaginationButtonProps = {
  totalUser: number; // Total des utilisateurs inscrits
  page: number; // Page actuelle
  baseUrl: string; // URL de base
  itemsPerPage: number; // Nombre d'utilisateurs par page
};

export const CoursePaginationButton = ({
  totalUser,
  page,
  baseUrl,
  itemsPerPage,
}: CoursePaginationButtonProps) => {
  const router = useRouter();

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(totalUser / itemsPerPage);

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page <= 0}
        onClick={() => {
          if (page > 0) {
            const searchParams = new URLSearchParams({
              page: String(page - 1),
            });
            const url = `${baseUrl}?${searchParams.toString()}`;
            router.push(url);
          }
        }}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPages - 1} // Désactiver si on est à la dernière page
        onClick={() => {
          if (page < totalPages - 1) {
            const searchParams = new URLSearchParams({
              page: String(page + 1),
            });
            const url = `${baseUrl}?${searchParams.toString()}`;
            router.push(url);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};