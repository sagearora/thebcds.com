'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';

export const CardContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('relative', className)}
      style={{
        perspective: '1000px',
      }}
    >
      {children}
    </div>
  );
};

export const CardBody = ({
  children,
  className,
  borderColor,
}: {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsHovered(false);
    cardRef.current.style.setProperty('--rotate-x', '0deg');
    cardRef.current.style.setProperty('--rotate-y', '0deg');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative transition-transform duration-300 ease-out',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? 'rotateX(var(--rotate-x)) rotateY(var(--rotate-y))'
          : 'rotateX(0) rotateY(0)',
        borderColor: borderColor,
      }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateZ?: number | string;
  [key: string]: any;
}) => {
  return (
    <Tag
      className={cn('transition-transform duration-300 ease-out', className)}
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateZ(${translateZ})`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

