// ContactInfoStep.tsx

export default function ContactInfoStep({ userData, setUserData }: any) {
  const contact = userData.contactInfo || {};

  return (
    <div className="space-y-4">
      <input
        placeholder="Phone"
        value={contact.phone || ""}
        onChange={(e) =>
          setUserData((prev: { contactInfo: any }) => ({
            ...prev,
            contactInfo: { ...prev.contactInfo, phone: e.target.value },
          }))
        }
        className="w-full border px-3 py-2 rounded"
      />

      <input
        placeholder="Location"
        value={contact.location || ""}
        onChange={(e) =>
          setUserData((prev: { contactInfo: any }) => ({
            ...prev,
            contactInfo: { ...prev.contactInfo, location: e.target.value },
          }))
        }
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}
