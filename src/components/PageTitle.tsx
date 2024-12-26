import { useEffect } from 'react';

interface PageTitleProps {
  title?: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  useEffect(() => {
    document.title = title ? `René Rieck - ${title}` : 'René Rieck';
  }, [title]);

  return null;
} 