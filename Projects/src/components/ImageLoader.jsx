import {useState, useEffect} from 'react';
import clsx from 'clsx';
import { cn } from '../libs/utils';

const ImageLoader = ({children, fetcher, ...props}) => {
  const [loading, setLoading] = useState(true);


  return <>
    <img {...props} src={fetcher()} onLoad={() => setLoading(false)} className={clsx(props.className,{
      "hidden": loading
    })} />
    {loading ? children : null}
  </>
}

export default ImageLoader;