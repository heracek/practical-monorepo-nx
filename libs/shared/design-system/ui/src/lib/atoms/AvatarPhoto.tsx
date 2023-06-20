import classNames from 'classnames';

export interface AvatarPhotoProps {
  src: string;
  alt: string;
  size?: '1' | '2' | '3' | '4' | '5';
  className?: string;
}

export function AvatarPhoto({
  src,
  alt,
  size = '3',
  className,
}: AvatarPhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        'ba b--black-10 db br2',
        `mw${size}`,
        `w${size}`,
        `h${size}`,
        className,
      )}
    />
  );
}
