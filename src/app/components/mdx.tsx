import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import React, { FC, HTMLAttributes } from 'react';

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

const Table: FC<TableProps> = ({ data }) => {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, children, ...props }) => {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props}>{children}</a>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  );
};

const RoundedImage: FC<ImageProps> = ({ alt, ...props }) => {
  return <Image alt={alt} className="rounded-lg" {...props} />;
};

interface CodeProps {
  children: string;
}

const Code: FC<CodeProps> = ({ children, ...props }) => {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() 
    .replace(/\s+/g, '-') 
    .replace(/&/g, '-and-') 
    .replace(/[^\w\-]+/g, '') 
    .replace(/\-\-+/g, '-'); 
}

function createHeading(level: number) {
  const Heading: FC<{ children: React.ReactNode } & HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
    let slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      // [
      //   React.createElement('a', {
      //     href: `#${slug}`,
      //     key: `link-${slug}`,
      //     // className: 'anchor',
      //   }),
      // ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

interface CustomMDXProps {
  components?: MDXRemoteSerializeResult;
  // Define outras propriedades se necessário
}

export const CustomMDX: FC<CustomMDXProps> = (props) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};
