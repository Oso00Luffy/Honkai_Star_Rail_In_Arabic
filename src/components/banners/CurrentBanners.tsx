// Component imports
import MainContentBox from "custom/MainContentBox";
import Image from "custom/Image";
import InfoCard from "custom/InfoCard";
import Countdown from "custom/Countdown";
import { FlexBox } from "styled/StyledBox";
import { TextStyled } from "styled/StyledTypography";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// MUI imports
import { Box, Stack, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import { useAppSelector } from "helpers/hooks";
import { selectCharacters } from "reducers/character";
import { selectWeapons } from "reducers/weapon";
import { selectCharacterBanners, selectWeaponBanners } from "reducers/banner";
import { selectServer } from "reducers/settings";
import { createDateObject, isCurrentBanner } from "helpers/dates";
import { isTBA } from "helpers/utils";
import { createBannerItems } from "./BannerListRow";

// Type imports
import { Rarity } from "types/_common";
import { Banner } from "types/banner";

function CurrentBanners() {
    const region = useAppSelector(selectServer);

    const characters = useAppSelector(selectCharacters);
    const weapons = useAppSelector(selectWeapons);
    const loading = [...characters, ...weapons].length === 0;

    const characterBanners = useAppSelector(selectCharacterBanners);
    const weaponBanners = useAppSelector(selectWeaponBanners);

    const filterCurrentBanner = (banner: Banner) =>
        isCurrentBanner(
            createDateObject({ date: banner.start, region: region }).obj,
            createDateObject({ date: banner.end, region: region }).obj
        );

    const currentCharacterBanners =
        characterBanners.filter(filterCurrentBanner);
    const currentWeaponBanners = weaponBanners.filter(filterCurrentBanner);

    const activeBanners =
        [...currentCharacterBanners, ...currentWeaponBanners].length > 0;

    const getRarity = (name: string, rarity: Rarity) =>
        !isTBA(name) ? rarity : 1;

    return (
        <MainContentBox
            title="البنرات الحالية"
            contentProps={{ padding: "16px" }}
        >
            {activeBanners ? (
                <FlexBox sx={{ flexWrap: "wrap", columnGap: 8, rowGap: 2 }}>
                    {currentCharacterBanners.length > 0 && (
                        <Box>
                            <TextStyled variant="h6-styled" sx={{ mb: "8px" }}>
                                الشخصيات
                            </TextStyled>
                            <Stack spacing={1}>
                                {currentCharacterBanners.map(
                                    (banner, index) => (
                                        <Box key={index}>
                                            <Grid container spacing={1}>
                                                {createBannerItems(
                                                    banner.fiveStars,
                                                    "character"
                                                ).map((item, i) => (
                                                    <InfoCard
                                                        key={`${item.name}-${i}`}
                                                        id={`${item.displayName}-currentBanner`.toLowerCase()}
                                                        variant="icon"
                                                        type="character"
                                                        name={item.name}
                                                        displayName={
                                                            item.displayName
                                                        }
                                                        rarity={getRarity(
                                                            item.name,
                                                            5
                                                        )}
                                                        disableLink={isTBA(
                                                            item.name
                                                        )}
                                                        disableZoomOnHover={isTBA(
                                                            item.name
                                                        )}
                                                        loading={loading}
                                                    />
                                                ))}
                                                {createBannerItems(
                                                    banner.fourStars,
                                                    "character"
                                                ).map((item, i) => (
                                                    <InfoCard
                                                        key={`${item.name}-${i}`}
                                                        id={`${item.displayName}-currentBanner`.toLowerCase()}
                                                        variant="icon"
                                                        type="character"
                                                        name={item.name}
                                                        displayName={
                                                            item.displayName
                                                        }
                                                        rarity={getRarity(
                                                            item.name,
                                                            4
                                                        )}
                                                        disableLink={isTBA(
                                                            item.name
                                                        )}
                                                        disableZoomOnHover={isTBA(
                                                            item.name
                                                        )}
                                                        loading={loading}
                                                    />
                                                ))}
                                            </Grid>
                                            <Countdown
                                                date={createDateObject({
                                                    date: banner.end,
                                                    region: region,
                                                })}
                                            />
                                        </Box>
                                    )
                                )}
                            </Stack>
                        </Box>
                    )}
                    {currentWeaponBanners.length > 0 && (
                        <Box>
                            <TextStyled variant="h6-styled" sx={{ mb: "8px" }}>
                                الأسلحة
                            </TextStyled>
                            <Stack spacing={1}>
                                {currentWeaponBanners.map((banner, index) => (
                                    <Box key={index}>
                                        <Grid container spacing={1}>
                                            {createBannerItems(
                                                banner.fiveStars,
                                                "weapon"
                                            ).map((item, i) => (
                                                <InfoCard
                                                    key={`${item.name}-${i}`}
                                                    id={`${item.displayName}-currentBanner`.toLowerCase()}
                                                    variant="icon"
                                                    type="weapon"
                                                    name={item.name}
                                                    displayName={
                                                        item.displayName
                                                    }
                                                    rarity={getRarity(
                                                        item.name,
                                                        5
                                                    )}
                                                    disableLink={isTBA(
                                                        item.name
                                                    )}
                                                    disableZoomOnHover={isTBA(
                                                        item.name
                                                    )}
                                                    loading={loading}
                                                />
                                            ))}
                                            {createBannerItems(
                                                banner.fourStars,
                                                "weapon"
                                            ).map((item, i) => (
                                                <InfoCard
                                                    key={`${item.name}-${i}`}
                                                    id={`${item.displayName}-currentBanner`.toLowerCase()}
                                                    variant="icon"
                                                    type="weapon"
                                                    name={item.name}
                                                    displayName={
                                                        item.displayName
                                                    }
                                                    rarity={getRarity(
                                                        item.name,
                                                        4
                                                    )}
                                                    disableLink={isTBA(
                                                        item.name
                                                    )}
                                                    disableZoomOnHover={isTBA(
                                                        item.name
                                                    )}
                                                    loading={loading}
                                                />
                                            ))}
                                        </Grid>
                                        <Countdown
                                            date={createDateObject({
                                                date: banner.end,
                                                region: region,
                                            })}
                                        />
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    )}
                    <Box>
                        <TextStyled variant="h6-styled" sx={{ mb: "8px" }}>
                            التسريبات
                        </TextStyled>
                        <Carousel showThumbs={false} infiniteLoop autoPlay>
                            <div>
                                <img src="/leak_1.jpg" alt="Leak 1" />
                            </div>
                            <div>
                                <img src="/leak_1.jpg" alt="Leak 2" />
                            </div>
                            <div>
                                <img src="/leak_1.jpg" alt="Leak 3" />
                            </div>
                        </Carousel>
                    </Box>
                </FlexBox>
            ) : (
                <>
                    {loading ? (
                        <LinearProgress color="info" />
                    ) : (
                        <>
                            <TextStyled>
                                لا يوجد بنرات حالية الآن
                            </TextStyled>
                            <Image
                                src="emotes/error5"
                                alt="No banners"
                                style={{
                                    height: "128px",
                                    marginTop: "24px",
                                }}
                            />
                        </>
                    )}
                </>
            )}
        </MainContentBox>
    );
}

export default CurrentBanners;
