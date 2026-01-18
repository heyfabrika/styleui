import Navbar from '@/components/common/navbar';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'StyleUI',
      transparentMode: 'top'
    },
  };
}