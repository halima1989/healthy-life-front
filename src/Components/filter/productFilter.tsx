"use client";

import { ChangeEvent, Fragment, useEffect, useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryProps } from "../../Utils/types";
import { getAllCategory } from "../../Services/category";
import FilterRadio from "./filterRadio";

const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];
// ]
const filters = [
    {
        id: "category",
        name: "Category",
        options: [
            { value: "new-arrivals", label: "New Arrivals", checked: false },
            { value: "sale", label: "Sale", checked: false },
            { value: "travel", label: "Travel", checked: true },
            { value: "organization", label: "Organization", checked: false },
            { value: "accessories", label: "Accessories", checked: false },
        ],
    },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Example({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [categoryList, setCategoryList] = useState<CategoryProps[]>();
    useEffect(() => {
        getAllCategory().then((res) => {
            setCategoryList(res.data);
        });
    }, []);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const category = searchParams.get("category");

    const addSearchParams = (name: string, value: string | number) => {
        const newSearchParams = new URLSearchParams(
            Array.from(searchParams.entries())
        );
        newSearchParams.append(name, value.toString());
        router.push(`${pathname}?${newSearchParams.toString()}`, {
            scroll: false,
        });
    };
    const changeSearchParams = (event: React.ChangeEvent<HTMLInputElement>) => {
        const entries = Array.from(searchParams.entries());
        const newSearchParams = new URLSearchParams(entries);
        newSearchParams.set("category", event.target.value);
        router.push(`${pathname}?${newSearchParams.toString()}`, {
            scroll: false,
        });
    };
    const deleteSearchParams = (name: string, value: string) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (name === undefined) {
            router.push(`${pathname}`);
            return;
        }
        newSearchParams.delete(name, value);
        router.push(`${pathname}?${newSearchParams.toString()}`, {
            scroll: false,
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            addSearchParams(event.target.name, event.target.value);
        } else {
            deleteSearchParams(event.target.name, event.target.value);
        }
    };

    return (
        <div className="bg-white h-full">
            <div>
                {/* Mobile filter dialog */}
                <Dialog
                    open={mobileFiltersOpen}
                    onClose={setMobileFiltersOpen}
                    className="relative z-40 lg:hidden"
                >
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">

                                </ul>

                                {filters.map((section) => (
                                    <Disclosure
                                        key={section.id}
                                        as="div"
                                        className="border-t border-gray-200 px-4 py-6"
                                    >
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">
                                                    {section.name}
                                                </span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon
                                                        aria-hidden="true"
                                                        className="h-5 w-5 group-data-[open]:hidden"
                                                    />
                                                    <MinusIcon
                                                        aria-hidden="true"
                                                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                                                    />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {categoryList &&
                                                    categoryList.map((option) => (
                                                        <Fragment key={option.id}>
                                                            <FilterRadio
                                                                value={option.name}
                                                                label={option.name}
                                                                handleChange={changeSearchParams}
                                                            />
                                                        </Fragment>
                                                    ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            All products
                        </h1>

                        <div className="flex items-center">


                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul
                                    role="list"
                                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                                >

                                </ul>

                                {filters.map((section) => (
                                    <Disclosure
                                        key={section.id}
                                        as="div"
                                        className="border-b border-gray-200 py-6"
                                    >
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">
                                                    Category
                                                </span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon
                                                        aria-hidden="true"
                                                        className="h-5 w-5 group-data-[open]:hidden"
                                                    />
                                                    <MinusIcon
                                                        aria-hidden="true"
                                                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                                                    />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {categoryList &&
                                                    categoryList.map((option) => (
                                                        <Fragment key={option.id}>
                                                            <FilterRadio
                                                                value={option.id}
                                                                label={option.name}
                                                                handleChange={changeSearchParams}
                                                            />
                                                        </Fragment>
                                                    ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                                {children}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}