import { Artwork } from "@/types/artwork";

interface Props {
  artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: Props) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 leading-snug">
        {artwork.title}
      </h1>

      {/* Description */}
      <div
        className="text-gray-800 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: artwork.description,
        }}
      />

      {/* Info */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <Info label="SKU" value={artwork.sku} />
        <Info label="Views" value={String(artwork.views)} />
        <Info label="Wishlist" value={String(artwork.wishlist)} />
        <Info label="Shows" value={String(artwork.shows)} />
        <Info label="Skala" value={artwork.skala} />
        <Info label="Orientasi" value={artwork.orientasi} />
        <Info label="Shape" value={artwork.shape} />
        <Info label="Dimension" value={artwork.dimension} />
      </div>

      {/* Package */}
      <div className="space-y-3">
        <h2 className="font-semibold text-gray-700">Select Package</h2>

        <Package title="Edit Content (Free)" />
        <Package title="Edit Artwork (Rp. 50.000)" />
        <Package title="Request Design Baru (Rp. 150.000)" />
      </div>

      {/* CTA */}
      <button className="w-full py-4 rounded-xl bg-teal-500 text-white font-semibold">
        Place Order
      </button>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function Package({ title }: { title: string }) {
  return (
    <label className="flex gap-3 p-3 border rounded-xl cursor-pointer">
      <input type="radio" name="package" />
      <span className="text-gray-900 font-medium">{title}</span>
    </label>
  );
}
