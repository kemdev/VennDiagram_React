'use client';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface IStyledButtonProps {
  iconComponent: React.ReactNode | JSX.Element;
  title: string;
  href: string;
  [key: string]: any;
}

const StyledButton = ({
  href,
  iconComponent,
  title,
  ...props
}: IStyledButtonProps) => {
  return (
    <Button
      // underline="hover"
      LinkComponent={Link}
      sx={{ display: 'flex', alignItems: 'center', ...props.sx }}
      color='inherit'
      href={href}
      {...props}
    >
      {/* <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
      {iconComponent}
      {title}
    </Button>
  );
};

interface IBreadcrumbsProps {
  children?: React.ReactNode | React.ReactElement | React.ReactElement[];
  currentPath?: string;
}

export default function IconBreadcrumbs(props: IBreadcrumbsProps) {
  const { children } = props;
  const [breadcrumbs, setBreadCrumbs] = React.useState<string[]>([]);
  const pathname = usePathname();

  React.useEffect(() => {
    const path = pathname?.split('/')?.filter((path) => {
      return path !== '';
    });
    path?.unshift('Home');
    setBreadCrumbs(path);
    console.log(
      '🚀 ~ file: Breadcrumbs.tsx:53 ~ React.useEffect ~ path:',
      path
    );
  }, [pathname]);

  return (
    <Box
      className='breadcrumb-container'
      role='presentation'
      onClick={handleClick}
      sx={{
        backgroundColor: 'background.paper',
        p: 2,
      }}
    >
      <Breadcrumbs
        aria-label='breadcrumb'
        separator='›'
      >
        {breadcrumbs?.map((breadcrumb, index) => {
          const isLast = index === breadcrumb.length - 1;
          return (
            <StyledButton
              key={breadcrumb}
              href={index !== 0 ? breadcrumb : '/'}
              iconComponent={index === 0 ? <HomeIcon sx={{ mr: 0.4 }} /> : null}
              title={breadcrumb}
            />
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
