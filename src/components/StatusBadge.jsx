export default function StatusBadge({ status }) {
    const styles = {
      confirmed: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      finished: "bg-blue-100 text-blue-700",
    };
  
    const labels = {
      confirmed: "Tasdiqlangan",
      pending: "Kutilmoqda",
      finished: "Yakunlandi",
    };
  
    return (
      <span
        className={`px-3 py-1 text-xs rounded-full ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  }