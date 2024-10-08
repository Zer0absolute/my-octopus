/* eslint-disable @next/next/no-img-element */
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from '@/components/layout/Layout';
import Link from 'next/link';

export default async function AdminPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Link href="/admin/courses">Courses</Link>
      </LayoutContent>
    </Layout>
  );
}