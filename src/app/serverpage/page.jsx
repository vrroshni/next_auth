import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function ServerHome() {
    const session = await getServerSession(authOptions);
    return (<section>
        <div>Home ServerSide Rendered</div>
        <p>{JSON.stringify(session)}</p>
    </section>
    )
}

