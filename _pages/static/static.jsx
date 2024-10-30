"use client";

import { get, list } from "@/app/api/api";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Static = ({ slug }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const getData = await list(`/static-pages/content/${slug}`).then(
        (res) => {
          setData(res?.payload);
        }
      );
    };

    getData();
  }, []);

  const staticData = data?.items?.map((item) => {
    return item;
  });

  const keyGenerator = (prefix) => {
    return `${prefix}-${Math.random().toString(36)}`;
  };

  return (
    <div>
      {staticData?.map((item) => {
        switch (item?.type) {
          case "multiple_images":
            return (
              <div
                key={keyGenerator("multiple_images")}
                className={`my-5 md:w-[50%] mx-auto !max-w-full`}
              >
                {item?.content?.map((image) => {
                  return (
                    <div
                      key={keyGenerator("image")}
                      className={`flex justify-center col-span-1 relative `}
                    >
                      <Image
                        src={image?.file ?? ""}
                        alt={``}
                        width={0}
                        height={0}
                        sizes={`100vw`}
                        className={`w-full`}
                        priority
                      />
                    </div>
                  );
                })}
              </div>
            );

            break;

          case "html_editor":
            return (
              <div
                key={keyGenerator("html")}
                className={`mt-[1.2rem] md:mt-[9rem] max-md:!max-w-[95%] mx-auto md:!max-w-[60%] prose !w-full`}
                dangerouslySetInnerHTML={{ __html: item?.content }}
              ></div>
            );

            break;

          case "textarea":
            return (
              <div
                key={keyGenerator("textarea")}
                className={`mt-[1.2rem] md:mt-[9rem] max-md:!max-w-[95%] mx-auto md:!max-w-[60%] prose !w-full`}
                dangerouslySetInnerHTML={{ __html: item?.content }}
              ></div>
            );

            break;
        }
      })}
    </div>
  );
};
