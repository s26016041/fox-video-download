import { Domain } from '../../const';

type ConstProps = {
    domain: string;
    id: string;
}

export default function GetConst(url: string): ConstProps {
    const domain = new URL(url).hostname
    let id = '';

    switch (domain) {
        case Domain.YOUTUBE:
            id = new URL(url).searchParams.get("v")
            // 如果 expression 等於 value1，則執行這段代碼
            break;
        case Domain.INSTAGRAM:
            // 如果 expression 等於 value2，則執行這段代碼
            break;
        case Domain.FACEBOOK:
            // 如果 expression 等於 value3，則執行這段代碼
            break;
        default:
            return { domain, id };
    }
}