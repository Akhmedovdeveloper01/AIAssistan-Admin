import { useUpdateAcceptance } from "@/hooks/useUpdateAcceptance";


export default function ActionButton({ status, id }) {
    const { mutate, isPending } = useUpdateAcceptance();

    const handleConfirm = () => {
        mutate({
            id,
            data: { status: "confirmed" },
        });
    };

    if (status === "pending") {
        return (
            <button
                onClick={handleConfirm}
                disabled={isPending}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
            >
                {isPending ? "..." : "✓ Tasdiqlash"}
            </button>
        );
    }

    if (status === "confirmed") {
        return (
            <button className="border px-3 py-1 rounded-md text-sm">
                Tahrirlash
            </button>
        );
    }

    return (
        <button className="border px-3 py-1 rounded-md text-sm">Ko‘rish</button>
    );
}
