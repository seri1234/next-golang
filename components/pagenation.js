import Link from 'next/link';

export default function Pagenation({totalCount}) {

    const perPage = process.env.NEXT_PUBLIC_PER_PAGE;

    const range = (start, end) => 
        [...Array(end - start + 1 )].map((_,i) => start + i )   
        return (
            <ul>
                {range(1,Math.ceil(totalCount / perPage)).map((number,index) => (
                <li key={index}>
                    <Link href={`/page/${number}`}>{number}</Link>
                </li>
            ))}
            </ul>
        );
}