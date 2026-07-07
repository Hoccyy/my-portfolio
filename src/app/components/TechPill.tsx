import { memo, useEffect, useState } from 'react';
import styles from './TechStack.module.css';


const getIconUrl = (name: string): string => {
    const slug = name
      .toLowerCase()
      .replace(/\.js/g, 'dotjs')
      .replace(/\+/g, 'plus')
      .replace(/\s/g, '');
  
      return `https://cdn.simpleicons.org/${slug}`;
  };

const checkIconExists = async (name: string): Promise<string | null> => {
    const url = getIconUrl(name);
  
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok ? url : null;
    } catch (error) {
      return null;
    }
};


const TechPill = (
    { name }: { name: string }
) => {
    const [resolvedUrl, setResolvedUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      let isMounted = true;
  
      checkIconExists(name).then((url) => {
        if (isMounted) {
          setResolvedUrl(url);
          setIsLoading(false);
        }
      });
  
      return () => { isMounted = false; };
    }, [name]);
  
    if (isLoading) return <div className={styles.skeleton}>...</div>;
  
    return (
      <div className={styles.pill}>
        {resolvedUrl ? (
          <img src={resolvedUrl} alt={`${name} icon`} className={styles.icon} />
        ) : (
          <span className={styles.fallbackDot} /> 
        )}
        <span>{name}</span>
      </div>
    );
};

export default memo(TechPill);