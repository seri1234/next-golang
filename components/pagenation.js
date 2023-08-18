import Link from 'next/link';
import styles from './pagenation.module.css';

export default function Pagenation({totalCount, id}) {
    const perPage = process.env.NEXT_PUBLIC_PER_PAGE;
    id = Number(id)
    const nextPage = id + 1
    const previousPage = id - 1
    const totalPage =  Math.ceil(totalCount / perPage)

    const range = (start, end) => 
        [...Array(end - start + 1 )].map((_,i) => start + i )   
        return (
            <ul className={styles.Pagination}>
                <div className={styles.Pagination_Wrapper}>
                {previousPage > 0 && (
                    <li>
                        <Link className={styles.Pagination_Item_Link} href={`/page/${previousPage}`}>{"<"}</Link>
                    </li>
                )}
                {range(1,totalPage).map((number,index) => {
                    if (number > id - 3 && number < id + 3  ) {
                        return <li className={styles.Pagination_Item} key={index}>
                            <Link className={styles.Pagination_Item_Link} href={`/page/${number}`}>{number}</Link>
                        </li>
                    }
                })}
                {totalPage >= nextPage  && (
                    <li className={styles.Pagination_Item_Link}> <Link href={`/page/${nextPage}`}>{">"}</Link> </li>
                )}
                </div>
            </ul>
        );
}