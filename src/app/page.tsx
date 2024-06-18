import Image from "next/image";
import profile from "../../public/images/profile.jpg"
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
        <Image
          src={profile}
          alt="profile"
          height={500}
          width={200}
          quality={100}
        />
</div>
        {/* cấn có width height để biết kích thươc */}

        <Link href='/register'>Regiter</Link>
        <Link href='/login'>Login</Link>
      
    </main>
  );
}
